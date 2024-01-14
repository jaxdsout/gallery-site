from django.db import models

class Creator(models.Model):
    ROLES = [
        ('Artist', 'Artist'),
        ('Designer', 'Designer'),
        ('Company', 'Company')
    ]
    role = models.CharField(max_length=8, choices=ROLES)
    name = models.CharField(max_length=150)
    about = models.TextField(max_length=1000)
    website = models.URLField(max_length=200)

    def __str__(self):
        return self.name


def upload_to(instance, filename):
    return 'items/{filename}'.format(filename=filename)

class Item (models.Model):
    CATEGORIES = [
        ('Painting', 'Painting'),
        ('Wall Art', 'Wall Art'),
        ('Prints', 'Prints'),
        ('Objects', 'Objects'),
        ('Goods', 'Goods')
    ]
    category = models.CharField(max_length=9, choices=CATEGORIES)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    creation_date = models.CharField(max_length=100)
    materials_used = models.CharField(max_length=200)
    dimensions = models.CharField(max_length=150)
    listing_start = models.DateField()
    listing_end = models.DateField()
    current_price = models.IntegerField(default=0)
    starting_price = models.IntegerField(default=1)
    image = models.ImageField(upload_to=upload_to, default='default.jpg', null=True, blank=True)
    creator = models.ForeignKey(Creator, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return self.title


class Bid (models.Model):
    amount = models.IntegerField(default=0)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='bids')

    def __str__(self):
        return f"{self.amount} for {self.item}"
