export const config = {
  apiUrl:
    ((process.env as any).VUE_APP_API_URL as string) || window.location.href
};
