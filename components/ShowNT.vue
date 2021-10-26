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
        justify-center
        items-start
        pl-5
        text-white
        pt-[25rem]
        sm:pl-[50vw] sm:pt-[25rem]
        md:pl-[50vw] md:pt-[30rem]
        lg:pt-[60rem] lg:pl-[60vw]
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
        sm:top-[48rem] sm:left-[2rem]
        md:pl-10 md:pt-[2.5rem]
        lg:pt-[12rem] lg:pl-[4rem]
      "
    >
      <h2
        class="
          font-extrabold sm:mb-2
          text-[18px]
          sm:text-[18px] sm:pl-2
          md:text-[22px]
          lg:text-[36px]
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
              sm:text-[2.8rem] sm:leading-[2.8rem]
              md:text-[4.5rem] md:leading-[4.5rem]
              lg:text-[8rem] lg:leading-[8rem]
              pl-4
            "
            >{{ calculateYears }}</span
          >
          <span
            class="
              font-extrabold sm:mt-2
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
              sm:text-[2.8rem] sm:leading-[2.8rem]
              md:text-[4.5rem] md:leading-[4.5rem]
              lg:text-[8rem] lg:leading-[8rem]
              
            "
            >:</span
          >
          <span
            class="
              font-extrabold sm:mt-2
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            "
            >&nbsp;</span
          >
        </div>
        
        <div class="flex flex-col justify-center items-center">
          <span
            class="
              font-extrabold
              text-white
              bg-[#D31900] bg-opacity-50
              text-[2.8rem]
              sm:text-[2.8rem] sm:leading-[2.8rem]
              md:text-[4.5rem] md:leading-[4.5rem]
              lg:text-[8rem] lg:leading-[8rem]
              
            " v-if="calculateMonths<=9"
            >0{{ calculateMonths }}</span>
            <span
            class="
              font-extrabold
              text-white
              bg-[#D31900] bg-opacity-50
              text-[2.8rem]
              sm:text-[2.8rem] sm:leading-[2.8rem]
              md:text-[4.5rem] md:leading-[4.5rem]
              lg:text-[8rem] lg:leading-[8rem]
              
            " v-else
            >{{ calculateMonths }}</span>
            <span
            class="
              font-extrabold sm:mt-2
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            " v-if="calculateMonths<=1"
            >Month</span>
          <span
            class="
              font-extrabold sm:mt-2
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            " v-else
            >Months</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <span
            class="
              font-extrabold
              text-white
              bg-[#D31900] bg-opacity-50
              text-[2.8rem]
              sm:text-[2.8rem] sm:leading-[2.8rem]
              md:text-[4.5rem] md:leading-[4.5rem]
              lg:text-[8rem] lg:leading-[8rem]
              
            "
            >:</span
          >
          <span
            class="
              font-extrabold sm:mt-2
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            "
            >&nbsp;</span
          >
        </div>
        <div class="flex flex-col justify-center items-center">
          <span
            class="
              font-extrabold
              text-white
              bg-[#D31900] bg-opacity-50
              text-[2.8rem]
              sm:text-[2.8rem] sm:leading-[2.8rem]
              md:text-[4.5rem] md:leading-[4.5rem]
              lg:text-[8rem] lg:leading-[8rem]
              pr-4
            " v-if="calculateDays<= 9"
            >0{{ calculateDays }}</span>
             <span
            class="
              font-extrabold
              text-white
              bg-[#D31900] bg-opacity-50
              text-[2.8rem]
              sm:text-[2.8rem] sm:leading-[2.8rem]
              md:text-[4.5rem] md:leading-[4.5rem]
              lg:text-[8rem] lg:leading-[8rem]
              pr-4
            " v-else
            >{{ calculateDays }}</span>
            <span
            class="
              font-extrabold sm:mt-2
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            " v-if="calculateDays<=1"
            >Day</span>
          <span
            class="
              font-extrabold sm:mt-2
              text-base
              sm:text-[1rem]
              md:text-[1.25rem]
              lg:text-[1.5rem]
            " v-else
            >Days</span>
        </div>
      </div>
    </div>
    <p
      class="
        text-[10px] font-bold bg-white bg-opacity-70 pl-2
        my-[20px]
        ml-[18px]
        sm:top-[55rem] sm:left-[2rem]
        md:my-[20px] md:ml-10
        lg:text-base lg:my-[50px] lg:ml-[4rem]
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
      var dob = new Date("2009/10/23");
      if (today.getMonth() >= dob.getMonth()) {
        if (today.getDate() >= dob.getDate()) {
          return today.getMonth() - dob.getMonth();
        } else {
          if (today.getMonth() - 1 >= dob.getMonth()) {
            return today.getMonth() - 1 - dob.getMonth();
          } else {
            return today.getMonth() - 1 + 12 - dob.getMonth();
          }
        }
      } else {
        if (today.getDate() >= dob.getDate()) {
          return today.getMonth() + 12 - dob.getMonth();
        } else {
          return today.getMonth() - 1 + 12 - dob.getMonth();
        }
      }
    },
    calculateDays: function () {
      var today = new Date();
      var dob = new Date("2009/10/23");
      if (today.getDate() > dob.getDate()) {
        return today.getDate() - dob.getDate() - 1;
      } else if (today.getDate() == dob.getDate()) {
        return today.getDate() - dob.getDate();
      } else {
        let calDate = new Date(dob.getFullYear(), dob.getMonth() + 1, 0);
        return today.getDate() + calDate.getDate() - dob.getDate() - 1;
      }
    },
  },
};
</script>