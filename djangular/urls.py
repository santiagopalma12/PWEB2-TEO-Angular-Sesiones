# djangular/urls.py
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView

# --- INICIO DE LA SECCIÓN DE DEBUG ESTÁTICO ---
from django.conf import settings
from django.conf.urls.static import static
# ----------------------------------------------


# Primero, las rutas de Django que SÍ deben funcionar.
urlpatterns = [
    path('admin/', admin.site.urls),
]

# Luego, las rutas estáticas. Esta es la parte que parece no estar funcionando.
# La añadimos explícitamente.
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])


# AL FINAL DE TODO, la ruta que captura el resto para Angular.
urlpatterns.append(
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
)

# --- LÍNEA DE DEBUG PARA VER QUÉ CARAJO ESTÁ PASANDO ---
print("--- Django URLs Cargadas ---")
for url in urlpatterns:
    print(url)
print("----------------------------")