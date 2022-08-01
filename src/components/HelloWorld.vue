<template>
  <div class="hello" ref="hello">
    <h1>{{ msg }}</h1>

    <el-form label-width="120px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="申请日期">
            <el-input v-model="form.date"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="流水号">
            <el-input v-model="form.taskId"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="金额">
            <el-input v-model="form.amt"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="币种">
            <el-input v-model="form.amt"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-table border :data="tableData" style="margin-top: 20px">
      <el-table-column
        align="center"
        v-for="t in tableColumn"
        :prop="t.prop"
        :label="t.label"
        :key="t.prop"
      ></el-table-column>
      <el-table-column align="center" label="操作">
        <el-link type="primary">详情</el-link>
      </el-table-column>
    </el-table>

    <el-button style="margin-top: 30px" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },

    data() {
      return {
        form: {},
        tableData: [],
        tableColumn: [
          { prop: 'ccy', label: '币种' },
          { prop: 'amt', label: '金额' },
          { prop: 'date', label: '日期' },
          { prop: 'taskId', label: '流水号' }
        ]
      }
    },

    mounted() {
      for (let i = 10; i <= 30; i++) {
        this.tableData.push({
          taskId: '202207' + i,
          ccy: 'rmb',
          date: '07' + i,
          amt: '10000' + i
        })
      }
    },

    methods: {
      submit() {
        this.$message.warning('iframe 提示信息测试')
      }
    }
  }
</script>
