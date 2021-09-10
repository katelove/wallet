<template>
    <div class="inline-block mt-20 switch">
      <input type="checkbox" class="w-9 h-15px bg-melancholyBlue cursor-pointer relative appearance-none outline-none rounded-10px input-time" checked />
    </div>
</template>

<style>
.input-time{
  transition: .5s;
}

.switch input:before{
  content: '';
  position:absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  top: 0;
  left: 0;
  background: white;
  transition: .5s;
}

.switch input:checked[type="checkbox"]:before{
  left: 18px;
}

</style>