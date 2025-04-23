from flask import jsonify
from models import Activity, Participant  # Supondo que existam esses modelos

@activities_bp.route('/activities', methods=['GET'])
def get_activities():
    activities = Activity.query.all()
    response = []
    for activity in activities:
        response.append({
            "id": activity.id,
            "name": activity.name,
            "participants": [participant.name for participant in activity.participants]  # Lista de participantes
        })
    return jsonify(response)
