<template>
  <section class="menuStructureSetting">

    <h2>Lav din menustruktur</h2>
    <p>Rediger i rækkefølgen på dine navigationslinks.</p>
    <article class="menuStructureWidget">
      <section class="activeMenuWrap">
        <h3>Aktive links</h3>
        <div class="activeMenuList">
          <draggable element="span" v-model="menuPagesActiveList" v-bind="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in menuPagesActiveList" :key="element.order">
                {{element.name}}
              </li>
            </transition-group>
          </draggable>
        </div>
      </section>
      <section>
        <h3>Inaktivektive links</h3>
        <div class="inactiveMenuList">
          <draggable class="list-group" tag="ul" v-model="menuPagesInactiveList" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'" class="tempContainer">
              <li class="list-group-item" v-for="element in menuPagesInactiveList" :key="element.order">
                {{element.name}}
              </li>
            </transition-group>
          </draggable>
        </div>
      </section>
      
    </article>
    

  </section>
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
  name: "CustomizeMenuStructure",
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

<style scoped lang="scss">
* {
  text-align: left;
}
.test {
  grid-column-start: 2;
  grid-row-start: 1;
}

.menuStructureWidget {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1em;
  border: $grey-border;
  border-radius: $neo-border;
  background-color: $neo-bg;
  box-shadow: $neo-shadow;

  h2 {
    grid-column-start: 1;
    grid-column-end: end;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.inactiveMenuList {
  ul {
    height: 100%;
  }

  .tempContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    align-content: flex-start;
    min-height: 100%;

    :nth-child() {
      flex-grow: 2;
    }
  }

  li {
    background-color: $primary;
    border-radius: 20px;
    text-align: center;
    padding: .5em 1em;
    margin: 4px;
    font-size: .8em;

    &:hover{
      background-color: darken( $primary, 10% )
    }
  }
}
.activeMenuWrap {
  h3 {
    padding-left: 16px;
  }
  .activeMenuList {

    height: calc(326px - 4em);
    overflow-y: scroll;

    

    ul {
      min-height: calc(326px - 4em);
      background-color: #fafafa;
    }

    li {
      padding: 16px;
      background-color: $tertiary;
      border: $grey-border;
      box-shadow: $small-shadow;
      color: $dark-grey;
      }
  }
}



.flip-list- {
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

  i {
    cursor: pointer;
  }
}

</style>