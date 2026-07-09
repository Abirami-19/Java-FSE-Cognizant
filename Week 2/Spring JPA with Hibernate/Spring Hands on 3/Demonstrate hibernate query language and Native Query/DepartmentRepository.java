@Repository
public interface DepartmentRepository
        extends JpaRepository<Department, Integer> {

    @Query("SELECT d FROM Department d JOIN FETCH d.employees")
    List<Department> getDepartmentsWithEmployees();

}