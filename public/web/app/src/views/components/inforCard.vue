<template>
    <Card :padding="0">
        <div class="infor-card-con" flex="main:justify corss:center">
            <div class="infor-card-icon-con" :style="{backgroundColor: color, color: 'white'}" flex="dir:top main:center cross:center">
                <Icon :type="iconType" :size="iconSize"></Icon>
            </div>
            <div class="infor-card-count-con" flex="dir:top main:center">
                <p :style="{textAlign: 'center', color: color, fontSize: countSize, fontWeight: '800'}"><span v-cloak :id="idName">{{ startVal }}</span><span>{{ unit }}</span></p>
                <p class="infor-intro-text">{{ introText }}</p>
            </div>
        </div>
    </Card>
</template>

<script>
function transformValue (val) {
    let endVal = 0;
    let unit = '';
    if (val < 1000) {
        endVal = val;
    } else if (val >= 1000 && val < 1000000) {
        endVal = parseInt(val / 1000);
        unit = 'K+';
    } else if (val >= 1000000 && val < 10000000000) {
        endVal = parseInt(val / 1000000);
        unit = 'M+';
    } else {
        endVal = parseInt(val / 1000000000);
        unit = 'B+';
    }
    return {
        val: endVal,
        unit: unit
    };
}

export default {
    name: 'inforCard',
    data(){
        return {
            unit: '',
            demo: {},
            count_up_option: {            //countUp配置
                useEasing: true, 
                useGrouping: true, 
                separator: '', 
                decimal: '', 
                prefix: '', 
                suffix: '' 
            }
        };
    },
    props: {
        idName: String,
        startVal: {
            type: Number,
            default: 0
        },
        endVal: Number,
        color: String,
        iconType: String,
        introText: String,
        countSize: {
            type: String,
            default: '30px'
        },
        countWeight: {
            type: Number,
            default: 700
        },
        iconSize: {
            type: Number,
            default: 40
        },
        decimals: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 2
        },
        delay: {
            type: Number,
            default: 500
        },
    },
    mounted () {
        this.$nextTick(() => {
            setTimeout(() => {
                let res = transformValue(this.endVal);
                let endVal = res.val;
                this.unit = res.unit;
                let demo = {};
                this.demo = demo = new CountUp(this.idName, this.startVal, endVal, this.decimals, this.duration, this.count_up_option);
                if (!demo.error) {
                    demo.start();
                }
            }, this.delay);
        });
    },
    watch: {
        endVal (val) {
            let res = transformValue(val);
            let endVal = res.val;
            this.unit = res.unit;
            this.demo.update(endVal);
        }
    }
};
</script>