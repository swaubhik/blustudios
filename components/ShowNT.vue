<template>
  <div
    class="
      relative
      bg-cover bg-about-hero2
      sm:bg-about-heromd
      md:bg-about-hero
      
      flex flex-col
    "
  >
    <div
      class="
        flex flex-col
        justify-center items-start
        pl-5
        text-white
        pt-[25rem]
        
        sm:pl-[50vw]
        sm:pt-[25rem]
        md:pl-[50vw]
        md:pt-[30rem]
        lg:pt-[60rem]
        lg:pl-[60vw]
      "
    >
      <p
        class="
          pb-4
          font-bold
          text-lg
          sm:text-[1.2rem]
          md:text-[1.4rem]
          lg:text-[1.6rem]
        "
      >
        We define the essence of your <br />
        brand through storytelling.
      </p>
      <p class="text-[.85rem] sm:text-[.85rem] md:text-[1.05rem] lg:text-xl">
        Every brand has an identity and a story <br />
        is the breath that infuses life into it. <br />
        Here at Blu Studios, we create a visually <br />
        dynamic space that allows these stories <br />
        to come alive.
      </p>
    </div>

    <div
      class="
        flex flex-col
        justify-center
        items-left
        text-left
        pl-[1.25rem]
        pt-[1.25rem]
        sm:top-[48rem]
        sm:left-[2rem]
        md:pl-10
        md:pt-[2.5rem]
        lg:pt-[12rem]
        lg:pl-[4rem]
      "
    >
      <h2
        class="
          font-extrabold
          text-[18px]
          sm:text-[18px]
          md:text-[22px]
          lg:text-[32px]
        "
      >
        Creating &amp; Curating since
      </h2>
      <div class="flex flex-row">
        <div class="flex flex-col justify-center items-center">
          <span
            class="
              font-extrabold
              text-white
              bg-[#D31900] bg-opacity-50
              text-[2.8rem]
              sm:text-[2.8rem]
              sm:leading-[2.8rem]
              md:text-[4.5rem]
              md:leading-[4.5rem]
              lg:text-[8rem]
              lg:leading-[8rem]
              px-4
            "
            >{{ calculateYears }}:</span
          >
          <span
            class="
              font-extrabold
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            "
            >Years</span
          >
        </div>

        <div class="flex flex-col justify-center items-center">
          <span
            class="
              font-extrabold
              text-white
              bg-[#D31900] bg-opacity-50
              text-[2.8rem]
              sm:text-[2.8rem]
              sm:leading-[2.8rem]
              md:text-[4.5rem]
              md:leading-[4.5rem]
              lg:text-[8rem]
              lg:leading-[8rem]
              px-4
            "
            >{{ calculateMonths }}:</span
          >
          <span
            class="
              font-extrabold
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            "
            >Months</span
          >
        </div>
        <div class="flex flex-col justify-center items-center">
          <span
            class="
              font-extrabold
              text-white
              bg-[#D31900] bg-opacity-50
              text-[2.8rem]
              sm:text-[2.8rem]
              sm:leading-[2.8rem]
              md:text-[4.5rem]
              md:leading-[4.5rem]
              lg:text-[8rem]
              lg:leading-[8rem]
              px-4
            "
            >{{ calculateDays }}</span
          >
          <span
            class="
              font-extrabold
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            "
            >Days</span
          >
        </div>
      </div>
    </div>
    <p
      class="
        text-sm
        
        py-[20px] pl-[18px]
        sm:top-[55rem]
        sm:left-[2rem]
        md:py-[20px]
        md:pl-10
        lg:text-base
        lg:py-[50px]
        lg:pl-[4rem]
      "
    >
      Blu Studios has worked with over 100 brands, national and international
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    calculateYears: function () {
      let currentDate = new Date();
      let birthDate = new Date("2009/10/23");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age;
    },
    calculateMonths: function () {
      var today = new Date();
      var DOB = new Date("2009/10/23");
      var totalMonths =
        (today.getFullYear() - DOB.getFullYear()) * 12 +
        today.getMonth() -
        DOB.getMonth();
      totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
      var years = today.getFullYear() - DOB.getFullYear();
      if (DOB.getMonth() > today.getMonth()) years = years - 1;
      else if (DOB.getMonth() === today.getMonth())
        if (DOB.getDate() > today.getDate()) years = years - 1;

      var days;
      var months;

      if (DOB.getDate() > today.getDate()) {
        months = totalMonths % 12;
        if (months == 0) months = 11;
        var x = today.getMonth();
        switch (x) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12: {
            var a = DOB.getDate() - today.getDate();
            days = 31 - a;
            break;
          }
          default: {
            var a = DOB.getDate() - today.getDate();
            days = 30 - a;
            break;
          }
        }
      } else {
        days = today.getDate() - DOB.getDate();
        if (DOB.getMonth() === today.getMonth()) months = totalMonths % 12;
        else months = (totalMonths % 12) + 1;
      }
      return months;
    },
    calculateDays: function () {
      var today = new Date();
      var DOB = new Date("2009/10/23");
      var totalMonths =
        (today.getFullYear() - DOB.getFullYear()) * 12 +
        today.getMonth() -
        DOB.getMonth();
      totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
      var years = today.getFullYear() - DOB.getFullYear();
      if (DOB.getMonth() > today.getMonth()) years = years - 1;
      else if (DOB.getMonth() === today.getMonth())
        if (DOB.getDate() > today.getDate()) years = years - 1;

      var days;
      var months;

      if (DOB.getDate() > today.getDate()) {
        months = totalMonths % 12;
        if (months == 0) months = 11;
        var x = today.getMonth();
        switch (x) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12: {
            var a = DOB.getDate() - today.getDate();
            days = 31 - a;
            break;
          }
          default: {
            var a = DOB.getDate() - today.getDate();
            days = 30 - a;
            break;
          }
        }
      } else {
        days = today.getDate() - DOB.getDate();
        if (DOB.getMonth() === today.getMonth()) months = totalMonths % 12;
        else months = (totalMonths % 12) + 1;
      }
      return days;
    },
  },
};
</script>

<style>
</style>