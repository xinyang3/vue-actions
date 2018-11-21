<template>
	<div>
		<div id="myDiagramDiv"></div>

	</div>
</template>

<script type="text/javascript">
	import go from 'gojs';
  var $ = go.GraphObject.make;

	export default {
		data() {
			return {}
		},
    created: function () {
      var myDiagram = $(go.Diagram, this.$el,
        {
          // initialContentAlignment: go.Spot.Center, // 居中显示Diagram内容
          "undoManager.isEnabled": true
        });
      var myModel = $(go.Model);
      // 在model的数据中, 每个节点数据的值都是由一个JS对象来表示:
      myModel.nodeDataArray = [
        { key: "Alpha" },
        { key: "Beta" },
        { key: "Gamma" }
      ];
      myDiagram.model = myModel;
    }
	}
</script>
<style type="text/css">
    #myDiagramDiv {
      width: 500px;
      height: 500px;
      background-color: #DAE4E4;
    }
</style>
