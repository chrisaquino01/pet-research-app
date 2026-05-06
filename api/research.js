export default async function handler(req, res) {
  const demo = {
    products: [
      {
        rank: 1,
        name: "Reusable Pet Hair Remover",
        why_trending: "Viral en TikTok por efecto before/after",
        target: "Dueños de gatos en UK",
        pain_point: "Pelos en sofá y ropa",
        cost_gbp: "£2–£4",
        sell_gbp: "£19–£29",
        margin_gbp: "£15–£25",
        saturation: "medium",
        pet_type: "Cat",
        marketing_angle: "Clean in seconds, no refills",
        hook: "My sofa was DISGUSTING… look now",
        creative: "Before/after en 3 segundos",
        is_gem: false
      }
    ],
    gems: [
      {
        rank: 1,
        name: "Cat Anti-Scratch Tape",
        why_trending: "Solución simple y barata",
        target: "Dueños de gatos en piso",
        pain_point: "Sofá destrozado",
        cost_gbp: "£1–£2",
        sell_gbp: "£12–£18",
        margin_gbp: "£10–£15",
        saturation: "low",
        pet_type: "Cat",
        marketing_angle: "Protege sin entrenar al gato",
        hook: "This saved my sofa overnight",
        creative: "Aplicar cinta + reacción del gato",
        is_gem: true
      }
    ],
    bundles: [
      {
        name: "Clean Home Kit",
        description: "Hair remover + lint roller → sube AOV"
      }
    ]
  };

  res.status(200).json(demo);
}
