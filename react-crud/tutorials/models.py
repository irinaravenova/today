from django.db import models

# Create your models here.

class Tutorial(models.Model):
    title = models.DateField(max_length=70, blank=True, default='')
    description = models.CharField(max_length=200,blank=True, default='')
    published = models.BooleanField(default=False)
    gratitude = models.CharField(max_length=200,blank=True, default='')
    priority = models.CharField(max_length=50,blank=True, default='')
    todo1 = models.CharField(max_length=50,blank=True, default='')
    todo2 = models.CharField(max_length=50,blank=True, default='')
    todo3 = models.CharField(max_length=50,blank=True, default='')
    pomo1 = models.BooleanField(default=False)    
    pomo2 = models.BooleanField(default=False)        
    pomo3 = models.BooleanField(default=False)    
    pomo4 = models.BooleanField(default=False)    
    pomo5 = models.BooleanField(default=False)