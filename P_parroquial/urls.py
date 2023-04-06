from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from P_parroquial import settings

from Inscripcion.views import InscripcionCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', InscripcionCreateView.as_view(), name='inscripcion'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)