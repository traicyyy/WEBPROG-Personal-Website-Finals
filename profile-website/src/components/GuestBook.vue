<template>
  <div>
    <h2>Guestbook</h2>
    <form @submit.prevent="submitComment">
      <input v-model="name" placeholder="Your Name (optional)" />
      <textarea v-model="comment" placeholder="Leave a message..." required></textarea>

      <!-- Star Rating -->
      <div class="rating">
        <span 
          v-for="star in 5" 
          :key="star" 
          @click="rating = star"
          :class="{ active: star <= rating }"
        >
          ★
        </span>
      </div>

      <button type="submit">Submit</button>
    </form>

    <div v-for="entry in guestbook" :key="entry.id" class="entry">
      <p>
        <strong>{{ entry.name || "Anonymous" }}</strong>: {{ entry.comment }}
      </p>
      <p>⭐ Rating: {{ entry.rating }}/5</p>
    </div>
  </div>
</template>




<script>
import { supabase } from "@/supabase";

export default {
  data() {
    return {
      name: "",
      comment: "",
      rating: 0,
      guestbook: [],
    };
  },
  async mounted() {
    this.loadComments();
  },
  
  methods: {
    async submitComment() {
      if (!this.comment) return; // Ensure comment is not empty

      try {
        const { data, error } = await supabase
          .from("guestbook")
          .insert([{ 
            name: this.name || "Anonymous", 
            comment: this.comment, 
            rating: this.rating 
          }])
          .select(); // Ensure it returns data

        if (error) throw error;
        
        if (data && data.length > 0) {
          this.guestbook.push(data[0]);
        }
        
        // Reset form
        this.name = "";
        this.comment = "";
        this.rating = 0;
      } catch (err) {
        console.error("Error submitting comment:", err.message);
      }
    },
    
    async loadComments() {
      try {
        const { data, error } = await supabase.from("guestbook").select("*");
        if (error) throw error;
        if (data) this.guestbook = data;
      } catch (err) {
        console.error("Error loading comments:", err.message);
      }
    },
  },
};
</script>




<style scoped>
  input, textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }

  .rating span {
    font-size: 24px;
    cursor: pointer;
    color: #ccc;
  }

  .rating span.active {
    color: gold;
  }

  .entry {
    margin-top: 10px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
</style>
