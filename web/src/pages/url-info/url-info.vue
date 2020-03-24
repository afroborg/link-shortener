<template>
  <div class="url-info">
    <table>
      <thead>
        <tr>
          <th>Original link</th>
          <th>Short link</th>
          <th>Clicks link</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(url, i) in urls" :key="url._id">
          <td>
            <a :href="url.originalLink" target="_blank">{{
              url.originalLink
            }}</a>
          </td>
          <td>
            <a :href="url.shortLink" target="_blank">{{ url.shortLink }}</a>
          </td>
          <td>{{ url.clicks }}</td>
          <td><i @click="() => del(url._id, i)" class="far fa-trash" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./url-info.ts"></script>
<style lang="scss" src="./url-info.scss" scoped></style>
