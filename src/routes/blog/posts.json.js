import dayjs from "dayjs";

export async function get() {
  let posts = await Promise.all(
    Object.entries(import.meta.glob("./*.md")).map(async ([path, page]) => {
      const { metadata } = await page();
      const slug = path.split("/").pop().split(".")[0];
      return { ...metadata, slug };
    })
  );

  posts.sort((a, b) => {
    return dayjs(b.date, "YYYY, MM DD") - dayjs(a.date, "YYYY, MM DD");
  });

  return {
    body: {
      posts,
    },
  };
}