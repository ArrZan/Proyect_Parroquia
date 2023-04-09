from django.db import models

from P_parroquial import settings


class Provincias(models.Model):
    nombre = models.CharField(verbose_name="Provincia", max_length=50, unique=True)

    def __str__(self):
        return self.nombre


class Canton(models.Model):
    nombre = models.CharField(verbose_name="Canton", max_length=50)
    provincia = models.ForeignKey(Provincias, on_delete=models.PROTECT)

    def __str__(self):
        return self.nombre


class Parroquias(models.Model):
    nombre = models.CharField(verbose_name="Parroquia", max_length=150)
    provincia = models.ForeignKey(Provincias, on_delete=models.PROTECT, null=True)
    canton = models.ForeignKey(Canton, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.nombre


class Personas(models.Model):
    nombres = models.CharField(max_length=75)
    apellidos = models.CharField(max_length=75)
    cedula = models.CharField(max_length=10, unique=True)
    celular = models.CharField(max_length=10, unique=True)
    estado_civil = models.CharField(max_length=1)
    tutor = models.BooleanField(default=False)
    num_hijos = models.IntegerField(default=0)
    papel_familiar = models.CharField(max_length=1)  # puede ser p = padre o m = madre

    def __str__(self):
        return self.nombres


class Niveles(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre


class Catequista(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre


class Niños(models.Model):
    nombres = models.CharField(max_length=75)
    apellidos = models.CharField(max_length=75)
    edad = models.IntegerField(default=0)
    cedula = models.CharField(max_length=10, unique=True)
    fecha_nac = models.DateTimeField()
    colegio = models.CharField(max_length=50)
    año_lectivo = models.CharField(max_length=6)

    def __str__(self):
        return self.nombre


class Bautizos(models.Model):
    fecha_Baut = models.DateTimeField(null=True)
    registro_Parroq = models.FileField(upload_to='archivos/', null=True)
    tomo = models.CharField(verbose_name="Tomo", max_length=50, null=True)
    pagina = models.IntegerField(verbose_name="Pagina", null=True)
    acta = models.IntegerField(verbose_name="Acta", null=True)
    observaciones = models.TextField(verbose_name="Observaciones", null=True)
    niño = models.ForeignKey(Niños, on_delete=models.PROTECT)
    parroquia = models.ForeignKey(Parroquias, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.nombre

    def get_image(self):
        if self.registro_Parroq:
            return '{}{}'.format(settings.MEDIA_URL, self.registro_Parroq)


class Inscripcion(models.Model):
    niño = models.ForeignKey(Niños, on_delete=models.PROTECT)
    fecha_registro = models.DateTimeField(auto_now=True)
    bautizo = models.ForeignKey(Bautizos, on_delete=models.PROTECT)

    def __str__(self):
        return self.nombre


class Asociacion_Nivel_Catequi(models.Model):
    nivel = models.ForeignKey(Niveles, on_delete=models.PROTECT)
    catequista = models.ForeignKey(Catequista, on_delete=models.PROTECT)
    inscripcion = models.ForeignKey(Inscripcion, on_delete=models.PROTECT)

    def __str__(self):
        return '{} - {}'.format(self.nivel, self.catequista)
