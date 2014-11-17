package shatrunjay.common.jenga.model;

import java.util.List;

/**
 *
 * @author Shatrunjay
 * @param <T> Type of Items in the list
 */
public class ItemList<T> {

    private int count;
    private List<T> items;

    public int getCount() {
        return count;
    }

    public List<T> getItems() {
        return items;
    }

    public void addItem(T item) {
        items.add(item);
        count++;
    }
    
    public void setItems(List<T> items){
        this.items = items;
        this.count = items.size();
    }
}
