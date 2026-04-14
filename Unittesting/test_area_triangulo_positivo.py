from triangulo import area_triangulo
import pytest

def test_area_triangulo_positivo():
    assert area_triangulo(5,4) == 10