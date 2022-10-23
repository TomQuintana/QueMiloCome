const name = (a, b) => {
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {

      } return true;
    }
  }

const platos = [
  {
    ingredientes: { primero: 'Pollo', segundo: 'papas' },
    _id: new ObjectId("6350883f694fa5da037d41b1"),
    nombrePlato: 'Pollo con papas',
    pasos: 'Primer paso: Cortar papa y ponerla con pollo al horno',
    __v: 0
  },
  {
    ingredientes: { primero: 'Pollo', segundo: 'verduras' },
    _id: new ObjectId("6350a92d89c20337813b9362"),
    nombrePlato: 'Pollo con verduras',
    pasos: 'Primer paso: Cortar papa y ponerla con pollo al horno',
    __v: 0
  }
]

const seleccion = [
  {
    ingredientes: { primero: 'Pollo', segundo: 'papas' },
    _id: new ObjectId("6350883f694fa5da037d41b1"),
    nombrePlato: 'Pollo con papas',
    pasos: 'Primer paso: Cortar papa y ponerla con pollo al horno',
    __v: 0
  },
  {
    ingredientes: { primero: 'Pollo', segundo: 'papas' },
    _id: new ObjectId("6350883f694fa5da037d41b1"),
    nombrePlato: 'Pollo con papas',
    pasos: 'Primer paso: Cortar papa y ponerla con pollo al horno',
    __v: 0
  }
]

const prueba = name(seleccion, platos)
console.log(prueba)
