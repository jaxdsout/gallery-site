from rest_framework import serializers
from .models import Creator, Item

class CreatorSerializer(serializers.HyperlinkedModelSerializer):
    items = serializers.HyperlinkedRelatedField(
        view_name='item-detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Creator
        fields = (
            'role',
            'name',
            'about',
            'website',
            'items'
        )


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    creator = serializers.HyperlinkedRelatedField(
        view_name='creator-detail',
        read_only=True
    )

    creator_id = serializers.PrimaryKeyRelatedField(
        queryset=Creator.objects.all(),
        source='creator'
    )

    class Meta:
        model = Item
        fields = (
            'id',
            'category',
            'title',
            'creator',
            'creator_id',
            'description',
            'creation_date',
            'materials_used',
            'dimensions',
            'listing_start',
            'listing_end',
            'current_price',
            'starting_price',
            'image'
        )