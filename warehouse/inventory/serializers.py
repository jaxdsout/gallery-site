from rest_framework import serializers
from .models import Creator, Item, Bid, Event

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
    creator = CreatorSerializer()

    class Meta:
        model = Item
        fields = (
            'id',
            'category',
            'title',
            'creator',
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

class EventSerializer(serializers.HyperlinkedModelSerializer):
    creator = CreatorSerializer()

    class Meta:
        model = Event
        fields = (
            'id',
            'title',
            'description',
            'poster',
            'time',
            'creator'
        )