var ScalaMeter = (function(parent) {
  var my = { name: "data" };
  my.index = [{"scope" : ["strictList", "map"], "name" : "Test-0", "unit" : "", "file" : "..\/strictList.map.Test-0.dsv"}, {"scope" : ["strictList", "mapmap"], "name" : "Test-1", "unit" : "", "file" : "..\/strictList.mapmap.Test-1.dsv"}, {"scope" : ["lazyList", "map"], "name" : "Test-2", "unit" : "", "file" : "..\/lazyList.map.Test-2.dsv"}, {"scope" : ["lazyList", "mapmap"], "name" : "Test-3", "unit" : "", "file" : "..\/lazyList.mapmap.Test-3.dsv"}, {"scope" : ["iterator", "map"], "name" : "Test-4", "unit" : "", "file" : "..\/iterator.map.Test-4.dsv"}, {"scope" : ["iterator", "mapmap"], "name" : "Test-5", "unit" : "", "file" : "..\/iterator.mapmap.Test-5.dsv"}, {"scope" : ["stream", "map"], "name" : "Test-6", "unit" : "", "file" : "..\/stream.map.Test-6.dsv"}, {"scope" : ["stream", "mapmap"], "name" : "Test-7", "unit" : "", "file" : "..\/stream.mapmap.Test-7.dsv"}, {"scope" : ["strictListList", "map"], "name" : "Test-8", "unit" : "", "file" : "..\/strictListList.map.Test-8.dsv"}, {"scope" : ["strictListList", "mapmap"], "name" : "Test-9", "unit" : "", "file" : "..\/strictListList.mapmap.Test-9.dsv"}];
  my.tsvData = ['date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	1.6909248333333335	true	1.204	2.178	ms	"1.278064 1.308999 2.300352 2.364389 1.249626 1.320085 2.123326 2.229121 1.678325 2.217089 2.282119 2.290188 1.269224 1.6384 2.134844 2.508892 1.262399 1.262913 1.270217 1.280805 1.258894 1.310232 2.064609 2.283058 1.258308 1.265628 1.269617 1.281959 1.308598 1.482812 1.532006 1.871217 1.35222 1.632243 2.178436 2.25408"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	4.994992305555556	true	2.530	7.460	ms	"3.153425 4.685464 5.704131 9.159506 3.332871 4.194513 5.943248 9.264838 3.170542 3.596125 5.864313 8.737353 3.215408 3.44156 6.032835 8.894063 3.244523 3.473314 5.729649 10.452987 3.191249 3.2974 5.627163 8.509096 3.387885 3.496351 3.510374 3.547502 3.365154 3.419565 5.564515 8.870252 3.154032 3.17237 3.191894 3.224253"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	3.0753516111111106	true	2.275	3.876	ms	"2.089643 2.124311 2.301184 2.352675 2.179643 2.19765 2.389349 2.675235 3.76322 4.008922 4.937939 5.034281 2.128769 2.226574 3.297747 3.520367 2.320381 2.38138 3.052067 3.417006 3.195593 3.239667 3.360064 3.386296 3.155816 3.235604 3.371985 3.46331 3.38969 3.423148 3.434079 3.45327 2.142098 2.920158 3.402283 3.741254"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	4.778084194444445	true	4.464	5.092	ms	"4.463729 4.605328 5.011671 5.171534 4.749767 4.929474 5.342356 5.360512 4.512279 4.594956 4.72405 4.814341 4.552152 4.786648 4.886076 4.947197 4.636688 4.729926 4.782731 4.927228 4.494152 4.57608 5.075562 5.609634 4.811171 4.866956 4.897412 4.939341 4.559597 4.606774 4.619065 4.644553 4.186772 4.276613 4.578114 4.740592"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	0.6890792222222224	true	-0.822	2.200	ms	"0.013331 0.015062 0.028946 1.911549 0.020415 0.021158 0.029131 1.805096 0.01328 0.013408 0.020043 1.88055 0.019884 0.026789 0.028842 1.847241 0.019681 0.020294 0.028608 1.838544 0.013984 0.033373 0.063178 1.914377 0.013011 0.014498 0.021184 3.729561 0.012876 0.013586 0.019872 2.505 0.01377 0.021253 0.123908 6.691569"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	5.254359388888889	true	4.268	6.241	ms	"4.609908 4.967244 6.108359 8.305115 4.418171 4.528033 4.927187 4.947467 4.834549 5.308018 5.638137 5.950123 4.816741 5.072735 5.844563 7.181553 4.932594 5.231729 5.855982 6.713313 4.80343 4.895805 4.911399 4.967525 4.387744 4.80752 4.855826 4.870073 4.510282 4.803808 5.781059 7.379831 4.400872 4.453719 4.483521 4.653003"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	9.718976777777774	true	6.879	12.559	ms	"6.561535 7.38577 8.234238 10.778611 6.755122 10.16185 10.302784 13.627672 6.667235 7.152164 10.492229 14.925628 6.606809 7.619342 9.901401 13.014146 6.666331 7.16693 11.667868 13.106762 7.538719 7.90022 10.306257 12.060418 8.163969 10.411397 12.74529 13.617244 6.413059 10.22943 10.920843 13.859577 6.44909 7.10891 10.286911 13.077403"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	28.05307783333334	true	23.473	32.633	ms	"21.191392 22.263516 22.719792 23.015178 24.679602 26.072561 26.489539 27.044207 19.359301 22.752213 23.072739 24.129716 27.931254 29.530247 31.396563 33.227032 27.217576 27.260343 27.327993 28.567079 26.199905 31.523523 32.673774 33.344853 28.413261 31.413142 34.369188 36.384147 25.169423 29.299188 30.959105 33.67333 27.302763 27.384121 32.35544 34.197796"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	1.695784638888889	true	1.235	2.156	ms	"2.222688 2.289003 2.345328 2.528825 1.335276 2.090804 2.297228 2.582186 1.280859 1.537963 1.542766 1.781672 1.266755 1.269755 1.27501 1.277211 1.378556 1.577327 1.793206 2.338274 1.297889 1.582327 1.643628 1.997701 1.318311 1.701378 2.194915 2.207282 1.310271 1.316404 1.327682 1.357517 1.361046 1.454855 1.459245 1.507104"\n', 'date	param-size	value	success	cilo	cihi	units	complete\n2018-03-19T14:12:16Z	100000	5.274169888888889	true	2.700	7.848	ms	"3.391555 3.495688 5.467205 9.136081 3.289295 6.319334 8.627635 9.356813 3.268175 3.328276 5.713629 8.702652 3.349689 3.38518 5.211539 8.64336 3.197622 3.718267 4.483175 5.822374 3.312479 3.330586 6.617252 10.717657 3.184195 3.307832 5.597551 8.595899 3.555722 3.648247 6.026843 9.936823 3.174047 3.273342 3.583357 4.10074"\n'];
  parent[my.name] = my;
  return parent;
})(ScalaMeter || {});