from rest_framework import serializers
from .models import Creator, Item, Bid

class CreatorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Creator
        fields = (
            'id',
            'role',
            'name',
            'website',
            'about',
            'items'
        )


class ItemSerializer(serializers.HyperlinkedModelSerializer):
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
            'image',
            'bids'
        )

class BidSerializer(serializers.HyperlinkedModelSerializer):
    item_id = serializers.PrimaryKeyRelatedField(
        queryset=Item.objects.all(),
        source='item'
    )
    
    current_bid = serializers.SerializerMethodField()

    def get_current_bid(self, obj):
        return obj.item.current_price if obj.item else None
    
    class Meta:
        model = Bid
        fields = (
            'id',
            'item_id',
            'amount',
            'current_bid'
        )
