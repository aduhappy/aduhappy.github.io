import ee
import os
# 配置代理
# os.environ['HTTP_PROXY'] = 'http://127.0.0.1:7890'
# os.environ['HTTPS_PROXY'] = 'http://127.0.0.1:7890'
# 权限认证，需要点击跳出的链接
ee.Authenticate()
