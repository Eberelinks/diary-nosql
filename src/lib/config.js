import { config } from "dotenv";

export default {
  
  get: function(key){
    config();
    return process.env[key];
  },

  getOrThrow: function(key) {
    const value = this.get(key);
    if (!value) {
      throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
  }
}