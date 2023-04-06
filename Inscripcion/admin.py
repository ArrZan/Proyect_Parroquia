from django.contrib import admin

from .models import Provincias

class ProvinciaAdmin(admin.ModelAdmin):
    pass


admin.site.register(Provincias, ProvinciaAdmin)