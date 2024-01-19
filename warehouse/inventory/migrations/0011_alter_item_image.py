# Generated by Django 4.1.7 on 2024-01-14 16:28

from django.db import migrations, models
import inventory.models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0010_item_image_delete_itemimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(blank=True, default='default.jpg', null=True, upload_to=inventory.models.upload_to),
        ),
    ]