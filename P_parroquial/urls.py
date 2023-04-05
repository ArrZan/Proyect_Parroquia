from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from P_parroquial import settings

from Inscripcion.views import InicioTemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', InicioTemplateView.as_view(), name='inicio'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)