from rest_framework import viewsets, permissions
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


from .models import Creator, Item, Bid
from .serializers import CreatorSerializer, ItemSerializer, BidSerializer


class CreatorViewSet(viewsets.ModelViewSet):
    permissions_classes = [permissions.IsAuthenticated]
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer

class ItemViewSet(viewsets.ModelViewSet):
    permissions_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        amount = request.data.get('amount')
        item = request.data.get('item')
        if not amount or not item:
            return Response({'error': 'Amount and Item ID are required'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            bid = Bid.objects.create(amount=amount, item_id=item)
            serializer = BidSerializer(bid)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)