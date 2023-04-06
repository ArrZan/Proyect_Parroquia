from datetime import datetime

from django.forms import ModelForm
from django import forms

from .models import *

class InscripcionForm(ModelForm):
    class Meta:
        model = Inscripcion
        fields = '__all__'