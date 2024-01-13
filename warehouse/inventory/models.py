from django.db import models

class Creator(models.Model):
    ROLES = [
        ('artist', 'Artist'),
        ('designer', 'Designer'),
        ('company', 'Company')
    ]
    role = models.CharField(max_length=200, choices=ROLES, verbose_name='Role')
    name = models.CharField(max_length=150)
    about = models.CharField(max_length=1000)
    website = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    
class Item (models.Model):
    category = models.TextChoices("painting", "wall art", "prints", "goods")
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    creation_date = models.CharField(max_length=100)
    materials_used = models.CharField(max_length=200)
    dimensions = models.CharField(max_length=150)
    listing_start = models.DateField(max_length=100)
    listing_end = models.DateField(max_length=100)
    current_price = models.IntegerField(default=0)
    starting_price = models.IntegerField(default=1)
    image = models.ImageField(upload_to='item_images/', blank=True)
    creator = models.ForeignKey(Creator, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return self.title

