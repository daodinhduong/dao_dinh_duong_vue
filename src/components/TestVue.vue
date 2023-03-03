<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Search..." />
    <ul>
      <li v-for="obj in filteredObjects" :key="obj.id">{{ obj.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objects: [
        { id: 1, title: "apple" },
        { id: 2, title: "banana" },
        { id: 3, title: "orange" },
        { id: 4, title: "peach" },
      ],
      searchTerm: "",
    };
  },
  computed: {
    filteredObjects() {
      return this.objects.filter((obj) =>
        obj.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
};
</script>
