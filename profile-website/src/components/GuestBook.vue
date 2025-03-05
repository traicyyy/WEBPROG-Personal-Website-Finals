<template>
  <div class="guestbook-container" style="background-image: url('/education.png');">
    <h2 class="guestbook-container">GUESTBOOK</h2>
    <form @submit.prevent="submitComment">
      <input v-model="name" placeholder="Your Name (optional)" />
      <textarea v-model="comment" placeholder="Leave a message..." required></textarea>

      <!-- Star Rating -->
      <h3 class="guestbook-text"> How's your experience? </h3>
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

    <div class="entries-container">
      <div v-for="entry in guestbook" :key="entry.id" class="entry">
        <p>
          <strong>{{ entry.name || "Anonymous" }}</strong>: {{ entry.comment }}
        </p>
        <p>⭐ Rating: {{ entry.rating }}/5</p>
        <hr /> <!-- Line separator -->
      </div>
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
/* Container Styles */
.guestbook-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    background-attachment: fixed;
}

.guestbook-container h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #ffffff;
}

.guestbook-container h3 {
    font-family: 'Anonymous Pro', monospace;
    color: #ff572e;
    text-align: center;
}

/* Form Styles */
form {
    width: 50%;
    max-width: 600px;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input, textarea {
    font-family: 'Anonymous Pro', monospace;
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

textarea {
    height: 150px;
}

button {
    display: block;
    width: 20%;
    padding: 0.3rem;
    font-size: 1rem;
    color: rgb(0, 0, 0);
    background-color: #ff572e;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin: auto;
}

button:hover {
    background-color: rgb(159, 121, 255);
}

/* Rating Styles */
.rating {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.rating span {
    font-size: 1.5rem;
    cursor: pointer;
    color: #ccc;
    margin: 0 0.1rem;
}

.rating span.active {
    color: gold;
}


/* Entries Container Styles */
.entries-container {
    font-family: 'Anonymous Pro', monospace;
    width: 50%;
    max-width: 600px;
    background-color: #ffffff;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
    padding-top: 0px;
}

.entry {
    padding: 0rem 0;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    form, .entries-container {
        width: 70%;
    }

    input, textarea, button {
        font-size: 0.9rem;
        padding: 0.4rem;
    }

    .rating span {
        font-size: 1.2rem;
    }

    .entry {
        padding: 0.8rem 0;
    }
}

@media (max-width: 480px) {
    form, .entries-container {
        width: 90%;
    }

    input, textarea, button {
        font-size: 0.8rem;
        padding: 0.3rem;
    }

    .rating span {
        font-size: 1rem;
    }

    .entry {
        padding: 0.6rem 0;
    }
}
</style>
