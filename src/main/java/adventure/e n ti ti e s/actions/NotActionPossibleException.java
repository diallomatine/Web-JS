package adventure.entities.action;

public class NotActionPossibleException extends Exception{

	private String msg;

	public NotActionPossibleException() {
		super();
	}

	public NotActionPossibleException(String msg) {
		super(msg);
	}
}
