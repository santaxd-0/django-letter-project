from django.db import models

# Create your models here.
class Letter(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    date_created = models.DateField(auto_now=True)
    date_user_can_open_letter = models.DateField()
    