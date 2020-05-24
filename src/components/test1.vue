<template>
  <div class="menuSettingWrapper">
    <div class="">
        <h3 class="">Lav din menustruktur</h3>
      <div class="panel-body">
        <button type="button" class="btn btn-default" @click="orderList">Sort by original order</button>
      </div>
    </div>

    <div class="menuInactiveListContainer">
      <draggable class="list-group" tag="ul" v-model="menuPagesInactiveList" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="element in menuPagesInactiveList" :key="element.order">
            {{element.name}}
          </li>
        </transition-group>
      </draggable>
    </div>

    <div class="">
      <draggable element="span" v-model="menuPagesActiveList" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item" v-for="element in menuPagesActiveList" :key="element.order">
            {{element.name}}
          </li>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
const menuPagesInactiveArray = [
  "Test",
  "Datapolitik",
  "Anmeldelser"
];
const menuPagesActiveArray = [
  "Forside",
  "Ydelser",
  "Om os",
  "Kontakt os"
  ]

export default {
  name: "CustomizeNavigationmenuItems",
  components: {
    draggable
  },
  data() {
    return {
      menuPagesInactiveList: menuPagesInactiveArray.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      menuPagesActiveList: menuPagesActiveArray.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    orderList() {
      this.menuPagesInactiveList = this.menuPagesInactiveList.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
};
</script>

<style scoped>

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: darkblue;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
  
}

.list-group-item i {
  cursor: pointer;
}

</style>