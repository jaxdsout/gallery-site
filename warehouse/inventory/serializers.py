from rest_framework import serializers
from .models import Creator, Item, Bid

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
            'website',
            'about',
            'items'
        )


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    creator = CreatorSerializer(read_only=True)


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
    item = serializers.HyperlinkedRelatedField(
        view_name='item-detail',
        read_only=True
    )

    item_id = serializers.PrimaryKeyRelatedField(
        queryset=Item.objects.all(),
        source='item'
    )

    class Meta:
        model = Bid
        fields = (
            'id',
            'item_id',
            'item',
            'bidder',
            'amount',
            'email',
            'phone_number',
            
        )
