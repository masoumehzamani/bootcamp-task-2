const notesList = [
  {
    id: 1,
    title: "Coding Javascript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js interview",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

// Sort by date
function sortList(data, sort) {
  return [...data].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    if (sort === "asc") return dateA - dateB;
    if (sort === "desc") return dateB - dateA;
  });
}

console.log(sortList(notesList, "desc"));

// Filter by status
function filterList(data, status) {
  if (status === "completed") return data.filter((note) => note.completed);
  if (status === "uncompleted") return data.filter((note) => !note.completed);
  if (status === "all") return data;
}

console.log(filterList(notesList, "uncompleted"));

// Filter by title
function filterTitle(data, filter) {
  const newList = [];
  for (const item of data) {
    if (item.title.toLowerCase().trim().includes(filter.toLowerCase().trim()))
      newList.push(item);
  }
  return newList;
}

console.log(filterTitle(notesList, "co"));
