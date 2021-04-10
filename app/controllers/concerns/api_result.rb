module ApiResult
  def send_response(operation_succeeded, messageSuccess, messageFail = '')
    message = (operation_succeeded ? messageSuccess : messageFail) || ""
    render :json => { message: message }, status: operation_succeeded ? 200 : 400, layout: false
  end

  def get_data(data)
    render :json => { message: data }, status: 200, layout: false
  end

  def handle_failure(message)
    render :json => { message: message }, status: :bad_request, layout: false
  end
end
