import ProductList from "../../components/ProductCardA";
import solarPanel from '@/img/solarPanel.jpg'
import SolarPanelProducerSelector from "../../components/don't used/SolarPanelProducerSelector";

function getMockData(amount) {
  const mockData = []
  const templateData = {
    id: 1,
    name: 'EcoTech Ultra',
    imageUrl: solarPanel,
    price: '$95',
    description: 'High-efficiency solar panel with eco-friendly design.',
  }

  for (var i = 0; i < amount; i++) {
    mockData.push({id: templateData.id + i, name: templateData.name, imageUrl: templateData.imageUrl, price: templateData.price, description: templateData.description})
  }

  return mockData
}
const mockData_NoInUse = [
  {
    id: 1,
    name: 'EcoTech Ultra',
    imageUrl: solarPanel,
    price: '$95',
    description: 'High-efficiency solar panel with eco-friendly design.',
  },
  {
    id: 2,
    name: 'SunPower Pro',
    imageUrl: solarPanel,
    price: '$110',
    description: 'Compact solar panel offering maximum power for small spaces.',
  },
  {
    id: 3,
    name: 'SolarMax High-Efficiency',
    imageUrl: solarPanel,
    price: '$105',
    description: 'Durable and sustainable energy solution for business use.',
  },
];

export default function Page() {
  const mockData = getMockData(27)
  return (
    <section>
      <h1>THanks</h1>
      <div className="flex">
        <div className="basis-2/12 border">
          Side filters
          <div>
            <SolarPanelProducerSelector />
          </div>
        </div>
        <div className="basis-10/12 border">
          <ProductList products={mockData} />
        </div>
      </div>
    </section>
  )
}