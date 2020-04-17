import json
import os

def lambda_handler(event, context):
    err_resp = {
        'statusCode': '400'
    }

    if not 'body' in event:
        return err_resp


    ev = json.loads(event['body'])
    if not (('password' in ev) and ('origin' in ev)):
        return err_resp

    pa = ev['password']
    ori = ev['origin']

    if pa != os.environ['password']:
        return err_resp

    url = os.environ['index'] if ori == 'index' else os.environ['join']

    response = {
        'statusCode': 200,
        'body': url
    }

    return response