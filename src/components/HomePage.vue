<template>
  <div class="container mt-4">
      <h2 class="text-center mb-4"> أحدث احصائيات الاصابات بفايروس كورونا حول العالم </h2>

      <div v-if="data.Global" class="row text-light text-center justify-content-center">
          <div class="col-10 col-sm-5 m-1 py-2 fs-3 bg-primary">
              الاصابات
              <span class="d-block">{{ data.Global.TotalConfirmed.toLocaleString() }}</span>
          </div>

          <div class="col-10 col-sm-5 m-1 py-2 fs-3 bg-danger">
              الوفيات
              <span class="d-block">{{ data.Global.TotalDeaths.toLocaleString()  }}</span>
          </div>

          <div class="col-10 col-sm-5 m-1 py-2 fs-3 bg-success">
              المتعافين
              <span class="d-block">{{ data.Global.TotalRecovered.toLocaleString()  }}</span>
          </div>

          <div class="col-10 col-sm-5 m-1 py-2 fs-3 bg-info">
              الاصابات النشطة
              <span class="d-block" v-if="data.Global.TotalConfirmed">{{ (data.Global.TotalConfirmed - data.Global.TotalRecovered).toLocaleString() }}</span>
          </div>
      </div>

    <input type="text" class="form-control mt-5" v-model="search" placeholder=" ابحث باستخدام اسم الدولة ">
      <table class="table table-striped mt-3">
          <thead>
              <tr>
                  <th> الدولة </th>
                  <th> اجمالي الاصابات </th>
                  <th> اجمالي الوفيات </th>
                  <th> الحالات النشطة </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="country in data.Countries" :key="country">
                  <td>{{ country.Country }}</td>
                  <td>{{ country.TotalConfirmed.toLocaleString() }}</td>
                  <td>{{ country.TotalDeaths.toLocaleString() }}</td>
                  <td>{{ country.TotalRecovered.toLocaleString() }}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            data: {},
            countries: [],
            search: '',
        }
    },
    created() {
        // const { data } = this.$api.get('summary')
        // this.data = data
        this.$api.get('summary').then(res => this.data = res.data)
    },
    watch: {
        data: function() {
            this.countries = this.data.Countries
        },
        search: function(value) {
            this.data.Countries = this.countries
            this.data.Countries = this.data.Countries.filter(item => {
                return value.toLowerCase().split(' ').every(v => item.Country.toLowerCase().includes(v));
            });
        }
    }
}
</script>

<style>

</style>