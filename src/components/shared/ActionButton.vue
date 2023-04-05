<template>
  <button :class="buttonClass">
    <img v-if="icon" :src="iconImgPath" alt="">
    <span>
        <slot></slot>
    </span>
  </button>
</template>

<script>
// HOW TO USE --------------------------------------------------------
// ICON PROP
// The Icon Prop accepts the file name of one of the icons in `assets/shared` as it's value

export default {
    name: "ActionButton",
    props: ["type", "icon"],
    computed: {
        iconImgPath() {
            if (this.icon) {
                const iconPath = `src/assets/shared/icon-${this.icon}.svg`
                console.log(iconPath);
                return iconPath;
            } else {
                return undefined;
            }
        },

        buttonClass() {
            switch (this.type) {
                case "primary":
                    return this.type + ' link-1';
                    break;
                case "secondary":
                    return this.type;
                    break;
                case "misc":
                    return this.type + ' link-2';
                case "media":
                    return this.type
            }
        }
    }
}
</script>

<style>
@define-mixin button-reset {
    outline: none;
    background: none;
    border: none;
}

button {
    @mixin button-reset;
    cursor: pointer;
    text-transform: uppercase;
}

.primary {
    color: rgba(125, 125, 125, 1);
    transition: color 0.3s;
    span {
        letter-spacing: 2.57px;
    }
}

.primary:hover {
    color: $colors.black;
}

.secondary {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    mix-blend-mode: normal;
    transition: background-color 0.5s ease-out;

    span {
        letter-spacing: 2.14px;
        font-weight: 700;
        line-height: 12.4px;
        font-size: 10px
    }
}

.secondary:hover {
    background: rgba(255, 255, 255, 0.25);
}

.misc:hover {
    color: rgba(0, 0, 0, 1);
}
</style>