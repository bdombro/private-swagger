# Active Omni Swagger

This local swagger browser is mucho-newer, mucho-faster b/c swagger-file is local, and mucho-better than Active-Omni's.

To refresh swagger.json,
1. Open browser and open inspector
1. Goto https://omni-uarms.omni.manh.com/order/swagger-ui.html
1. Right-click network call for api-docs and choose "Copy as cURL"
1. Paste it into a bash/zsh terminal and add `> swagger.json` or into scripts/refresh.sh

To run, `yarn start`