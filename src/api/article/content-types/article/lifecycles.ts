import slugify from 'slugify';

export default {
  async beforeCreate(event) {
    const { data } = event.params;
    if (!data.slug && data.title) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }
    if (!data.postedAt) {
      data.postedAt = new Date().toISOString();
    }
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    if (!data.slug && data.title) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }
  }
};
