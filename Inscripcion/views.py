import json
from django.views.generic.edit import CreateView
from .models import *
from .forms import InscripcionForm


class InscripcionCreateView(CreateView):
    template_name = "base.html"
    model = Inscripcion
    form_class = InscripcionForm

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['titulo'] = "Formulario"
        context['url_anterior'] = '/'
        context['provincias'] = Provincias.objects.all()
        context['cantones'] = json.dumps(self.JSONcanton())
        return context

    def JSONcanton(self):
        data = []
        for dat in Canton.objects.all():
            canton = Canton()
            item = {}
            item['id'] = dat.id
            item['nombre'] = dat.nombre.title()
            item['provincia_id'] = dat.provincia_id
            data.append(item)

        return data
