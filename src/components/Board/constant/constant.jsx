const columns = ["ToDo List", "In Progress", "Review", "Complete"]
const data = {
  "Todo List": [
    {
      id: "1",
      title: "asdasdasdasdasoijfpoiaj sfoasidjfasodif",
      content: "asdasda sdasdasoij fpoiajsfoasidjfasodif",
      // created_at: dayjs().format("MMM DD,YYYY hh:mm A"),
    },
  ],
  "In Progress": [],
  Review: [],
  Complete: [],
}

const statuses = [
  {
    status: "open",
    icon: "⭕️",
    color: "#EB5A46",
  },
  {
    status: "in progress",
    icon: "🔆️",
    color: "#00C2E0",
  },
  {
    status: "in review",
    icon: "📝",
    color: "#C377E0",
  },
  {
    status: "done",
    icon: "✅",
    color: "#3981DE",
  },
]

export { data, statuses }
