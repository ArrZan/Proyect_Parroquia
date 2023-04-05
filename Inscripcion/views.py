from django.views.generic.base import TemplateView


class InicioTemplateView(TemplateView):
    template_name = "base.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['titulo'] = "Formulario"
        context['url_anterior'] = '/'
        return context
