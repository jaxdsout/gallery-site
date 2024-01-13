from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CreatorViewSet, ItemViewSet

router = DefaultRouter()
router.register(r'creators', CreatorViewSet, basename='creator')
router.register(r'items', ItemViewSet, basename='item')
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
]