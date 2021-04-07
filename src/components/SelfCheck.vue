<template>
  <div class="container mt-3">
      <h3>افحص نفسك</h3>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title bg-warning p-2 text-center">
            بروتوكل لتحديد حالات الاشتباه بفايروس كورونا من عدمه، إذ يعتمد على استخدام نظام النقاط.
              <span class="d-block">(هذا النموذج مثال معتمد في بعض الدول العربية)</span>
          </h5>
          <div v-for="(item,i) in data" :key="i" :class="`form-check text-${item.color}`">
            <label class="form-check-labelfloat-start" :for="String(i)">
              {{item.label}}
            </label>
            <input class="form-check-input" type="checkbox" v-model="item.status" :id="String(i)">
          </div>
        </div>
        <div class="text-center my-3">
          <button @click="check" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            افحص
          </button>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">النتيجة</h5>
            </div>
            <div class="modal-body">
              {{resultToStr(result)}}
            </div>
            <div class="modal-footer">
              <button @click="reset" type="button" class="btn btn-primary" data-bs-dismiss="modal">فحص جديد</button>
              <button @click="reset" type="button" class="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      result: 0,
      data: [
        { label: 'ارتفاع درجة الحرارة أكثر من 38', status: false, points: 2, color: 'success' },
        { label: 'سعال شديد وجاف', status: false, points: 2, color: 'success' },
        { label: 'احتقان شديد بالحلق', status: false, points: 1, color: 'primary' },
        { label: 'مرض مزمن: سكري أو ضغط أو أمراض قلبية أو كلوية ..ألخ', status: false, points: 1, color: 'primary' },
        { label: 'سفر خارج البلد أو احتكاك مع شخص قادم من خارج البلد', status: false, points: 5, color: 'danger' },
        { label: 'مخالطة لحالة التهاب تنفسي حاد', status: false, points: 4, color: 'info' },
        { label: 'زيارة مكان صحي ثبت فيه وجود حالة مصابة بالكورونا', status: false, points: 3, color: 'warning' },
        { label: 'أن تكون أحد العاملين بالقطاع الصحي أو العزل الصحي', status: false, points: 1, color: 'primary' }
      ]
    }
  },
  methods:{
    check() {
      for( const item of this.data) {
        if(item.status){
          this.result = this.result + item.points
        }
      }
    },
    resultToStr (val) {
      if (val <= 4) { return 'التزم بالبيت (عزل ذاتي) تجنباً لاصابتك بالعدوى  ' }
      else if (val === 5) { return 'استشر طبيب هاتفياً واشرح له عنما تعاني منه, واستمع لارشادات الطبيب.' }
      else if (val >= 6) { return 'راجع المشفى لطلب الاستشارة من أجل اجراء الفحص السريري مع الانتباه لعدم مخالطة من حولك' }
    },
    reset(){
      this.result = 0
      for( const i of this.data){
        i.status = false
      }
    }
  }

}
</script>

<style>

</style>